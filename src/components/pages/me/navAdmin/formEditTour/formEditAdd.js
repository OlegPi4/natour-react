import { useFormik } from "formik";
import * as Yup from "yup";

const FormEditAdd = ({ tour }) => {
  const formik = useFormik({
    initialValues: {
      name: tour.name,
      duration: tour.duration,
      difficulty: tour.difficulty,
      maxGroupSize: tour.maxGroupSize,
      price: tour.price,
      summary: tour.summary,
      description: tour.description,
      imageCover: tour.imageCover,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required()
        .min(4, "Tour name should be at least 4 characters long"),
      duration: Yup.number()
        .required()
        .positive("Duration must be a positive number"),
      difficulty: Yup.string()
        .oneOf(
          ["easy", "medium", "difficult"],
          "Difficulty must be either 'easy', 'medium', or 'hard'"
        )
        .required("Difficulty is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number"),
      summary: Yup.string().min("Min length 10 car."),
      description: Yup.string().min("Min length 30car."),
      imageCover: Yup.string(),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <>
      <div className="login-form">
        {tour.name ? (
          <h2 className="heading-secondary ma-bt-lg"> Edit Tour </h2>
        ) : (
          <h2 className="heading-secondary ma-bt-lg"> Add Tour </h2>
        )}

        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Tour name
            </label>
            <input
              className="form__input"
              id="name"
              name="name"
              type="text"
              placeholder={tour.name}
              {...formik.getFieldProps("name")}
            ></input>
            {formik.errors.name && formik.touched.name ? (
              <div className="formik-error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form__group">
            <div className="form-block-wrap">
              <div className="form-block">
                <label htmlFor="duration" className="form__label">
                  Duration
                </label>
                <input
                  className="form__input"
                  id="duration"
                  name="duration"
                  type="number"
                  placeholder={tour.duration}
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.duration && formik.touched.duration ? (
                  <div className="formik-error">{formik.errors.duration}</div>
                ) : null}
              </div>
              <div className="form-block ">
                <label htmlFor="difficulty" className="form__label">
                  Difficulty
                </label>
                <input
                  className="form__input"
                  id="difficulty"
                  name="difficulty"
                  type="text"
                  list="diff"
                  placeholder={tour.difficulty}
                  value={formik.values.difficulty}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.difficulty && formik.touched.difficulty ? (
                  <div className="formik-error">{formik.errors.difficulty}</div>
                ) : null}
                <datalist id="diff">
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="difficult">difficult</option>
                </datalist>
              </div>
            </div>
            <div className="form-block-wrap">
              <div className="form-block daun">
                <label htmlFor="maxGroupSize" className="form__label">
                  The max size of group
                </label>
                <input
                  className="form__input"
                  id="maxGroupSize"
                  name="maxGroupSize"
                  type="number"
                  placeholder={tour.maxGroupSize}
                  value={formik.values.maxGroupSize}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </div>
              <div className="form-block daun">
                <label htmlFor="price" className="form__label">
                  Price
                </label>
                <input
                  className="form__input"
                  id="price"
                  name="price"
                  type="number"
                  placeholder={tour.price}
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.price && formik.touched.price ? (
                  <div className="formik-error">{formik.errors.price}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Summary
            </label>
            <textarea
              className="form__input"
              id="summary"
              name="summary"
              rows="2"
              cols="50"
              placeholder={tour.summary}
              value={formik.values.summary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.summary && formik.touched.summary ? (
              <div className="formik-error">{formik.errors.summary}</div>
            ) : null}
          </div>

          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Description
            </label>
            <textarea
              className="form__input"
              id="description"
              name="description"
              rows="6"
              cols="50"
              placeholder={tour.description}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.description && formik.touched.description ? (
              <div className="formik-error">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Image cover / {formik.values.imageCover}
            </label>
            <input
              className="form__input"
              id="ImageCover"
              name="ImageCover"
              type="file"
              alt="chose file"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.errors.imageCover && formik.touched.imageCover ? (
              <div className="formik-error">{formik.errors.imageCover}</div>
            ) : null}
          </div>
          <button className="btn btn--green" type="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
};
export default FormEditAdd;
