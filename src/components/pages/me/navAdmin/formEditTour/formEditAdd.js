import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ lable, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {lable}
      </label>
      <input className="form__input" {...props} {...field}></input>
      {meta.touched && meta.error ? (
        <div className="formik-error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyTextareaInput = ({ lable, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {lable}
      </label>
      <textarea className="form__input" {...props} {...field} />

      {meta.touched && meta.error ? (
        <div className="formik-error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelectInput = ({ lable, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {lable}
      </label>
      <select className="form__input" {...props} {...field}>
        {children}
      </select>

      {meta.touched && meta.error ? (
        <div className="formik-error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormEditAdd = ({ tour }) => {
  const [data, setData] = useState(null);

  const updateTour = (data) => {
    console.log(JSON.stringify(data, null, 2));
    setData(data);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: tour.name || "",
          duration: tour.duration || 0,
          difficulty: tour.difficulty || "",
          maxGroupSize: tour.maxGroupSize || 0,
          price: tour.price || 0,
          summary: tour.summary || "",
          description: tour.description || "",
          imageCover: tour.imageCover || "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required()
            .min(4, "Tour name should be at least 4 characters long"),
          duration: Yup.number()
            .required()
            .positive("Duration must be a positive number"),
          difficulty: Yup.string()
            .oneOf(
              ["easy", "medium", "difficult"],
              "Difficulty must be either 'easy', 'medium', or 'difficult'"
            )
            .required("Difficulty is required"),
          price: Yup.number()
            .required("Price is required")
            .positive("Price must be a positive number"),
          summary: Yup.string().required().min(10, "Min length 10 car."),
          description: Yup.string().min(30, "Min length 30 car."),
          imageCover: Yup.string(),
        })}
        onSubmit={(name) => {
          let data = {};
          data.name = name.name;
          data.difficulty = name.difficulty;
          data.maxGroupSize = name.maxGroupSize;
          data.price = name.price;
          data.summary = name.summary;
          data.description = name.description;
          data.imageCover = name.imageCover.split("\\").reverse()[0];

          updateTour(data);
        }}
      >
        <div className="login-form">
          {tour.name ? (
            <h2 className="heading-secondary ma-bt-lg"> Edit Tour </h2>
          ) : (
            <h2 className="heading-secondary ma-bt-lg"> Add Tour </h2>
          )}

          <Form className="form">
            <div className="form__group">
              <MyTextInput
                lable="Tour name"
                id="name"
                name="name"
                type="text"
                placeholder={tour.name}
              />
            </div>
            <div className="form__group">
              <div className="form-block-wrap">
                <div className="form-block">
                  <MyTextInput
                    lable="Duration"
                    id="duration"
                    name="duration"
                    type="number"
                    placeholder={tour.duration}
                  />
                </div>
                <div className="form-block ">
                  <MySelectInput
                    lable="Difficulty"
                    id="difficulty"
                    name="difficulty"
                    type="text"
                    placeholder={tour.difficulty}
                  >
                    <option>indicate difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="difficult">difficult</option>
                  </MySelectInput>
                </div>
              </div>
              <div className="form-block-wrap">
                <div className="form-block daun">
                  <MyTextInput
                    lable="The max size of group"
                    id="maxGroupSize"
                    name="maxGroupSize"
                    type="number"
                    placeholder={tour.maxGroupSize}
                  />
                </div>
                <div className="form-block daun">
                  <MyTextInput
                    lable="Price"
                    id="price"
                    name="price"
                    type="number"
                    placeholder={tour.price}
                  />
                </div>
              </div>
            </div>
            <div className="form__group">
              <MyTextareaInput
                lable="Summary"
                id="summary"
                name="summary"
                as="textarea"
                rows="2"
                cols="50"
                placeholder={tour.summary}
              />
            </div>

            <div className="form__group">
              <MyTextareaInput
                lable="Description"
                id="description"
                name="description"
                as="textarea"
                rows="6"
                cols="50"
                placeholder={tour.description}
              />
            </div>
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Image cover
              </label>
              <Field
                className="form__input"
                id="imageCover"
                name="imageCover"
                type="file"
                accept="*/*"
                value={this}
              ></Field>
              <ErrorMessage className="formik-error" name="imageCover" />
            </div>
            <button className="btn btn--green" type="submit">
              Update
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
export default FormEditAdd;
