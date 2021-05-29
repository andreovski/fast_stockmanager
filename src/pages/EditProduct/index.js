import { useEffect, useRef, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ReactTagInput from "@pathofdev/react-tag-input";

import { useProduct } from "../../hooks/useProductList";
import { currentDate } from "../../utils/getCustomDate";
import schema from "../../utils/getInputSchemas";
import Header from "../../components/Header";
import Input from "../../components/Input";

import {
  Container,
  Content,
  ArrowLeftIcon,
  TagInput,
  ImageContentInput,
} from "./style";

export default function EditProduct() {
  const { params } = useRouteMatch();
  const { products, handleUpdateProduct } = useProduct();
  const history = useHistory();

  const foundedProduct = products.filter((product) => product.id === params.id);
  const product = foundedProduct[0];

  const [tags, setTags] = useState(product.category);
  const [image, setImage] = useState();
  const [convertedImage, setConvertedImage] = useState(product.image);

  const imageInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConvertedImage(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const inputInitialValues = {
    name: product.name,
    description: product.description,
    category: product.category,
    value: product.value,
    height: product.height,
    width: product.width,
    length: product.length,
    weigth: product.weigth,
    acquisition: product.acquisition,
  };

  function handleUploadImageButton(event) {
    event.preventDefault();
    imageInputRef.current.click();
  }

  function handleUploadImagePreview(event) {
    const file = event.target.files[0];

    setImage(null);
    file && setImage(file);
  }

  function handleSubmit(values) {
    const newValidatedValues = {
      id: product.id,
      image: convertedImage,
      name: values.name,
      description: values.description,
      category: tags,
      value: values.value,
      height: values.height,
      width: values.width,
      length: values.length,
      weigth: values.weigth,
      acquisition: values.acquisition,
    };

    handleUpdateProduct(newValidatedValues);
    history.push("/");
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <main>
            <Formik
              validateOnBlur={false}
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={inputInitialValues}
            >
              {() => (
                <Form>
                  <header>
                    <Link to="/">
                      <ArrowLeftIcon />
                    </Link>
                    <button type="submit">Salvar</button>
                  </header>

                  <div className="formContent">
                    <ImageContentInput>
                      <label className="imageLabel" htmlFor="image" />
                      <div>
                        {convertedImage ? (
                          <img
                            src={convertedImage}
                            alt="imagem"
                            onClick={() => imageInputRef.current.click()}
                          />
                        ) : (
                          <button onClick={handleUploadImageButton}>
                            Adicionar imagem
                          </button>
                        )}
                        <Field
                          className="imageInput"
                          type="file"
                          name="image"
                          innerRef={imageInputRef}
                          accept="image/*"
                          onChange={handleUploadImagePreview}
                        />
                      </div>
                    </ImageContentInput>

                    <div className="formInputs">
                      <Input
                        labelTitle="Nome"
                        labelhtmlFor="name"
                        typeInput="text"
                      />
                      <Input
                        labelTitle="Descrição"
                        labelhtmlFor="description"
                        typeInput="text"
                        textArea
                      />

                      <TagInput>
                        <label className="categoryInput">Categoria</label>
                        <ReactTagInput
                          tags={tags}
                          maxTags={6}
                          placeholder={"Tecle enter para inserir..."}
                          onChange={(newTags) => setTags(newTags)}
                        />
                      </TagInput>

                      <Input
                        labelTitle="Valor"
                        labelhtmlFor="value"
                        typeInput="number"
                        note="R$:"
                      />

                      <h3>Medidas</h3>

                      <Input
                        labelTitle="Altura"
                        labelhtmlFor="height"
                        typeInput="number"
                        note="Centimentro"
                      />
                      <Input
                        labelTitle="Largura"
                        labelhtmlFor="width"
                        typeInput="number"
                        note="Centimentro"
                      />
                      <Input
                        labelTitle="Comprimento"
                        labelhtmlFor="length"
                        typeInput="number"
                        note="Centimentro"
                      />
                      <Input
                        labelTitle="Peso"
                        labelhtmlFor="weigth"
                        typeInput="number"
                        note="KG"
                      />
                      <Input
                        labelTitle="Data da aquisição"
                        labelhtmlFor="acquisition"
                        typeInput="date"
                        note={`Anterior a data de ${currentDate}`}
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </main>
        </Content>
      </Container>
    </>
  );
}
