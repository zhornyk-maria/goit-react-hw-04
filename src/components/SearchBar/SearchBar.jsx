import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';
import * as yup from 'yup';
import css from './SearchBar.module.css';
import { CiSearch } from "react-icons/ci";

const searchFormSchema = yup.object().shape({
    searchTerm: yup.string().required("Required"),
});

const initialValues = {
    searchTerm: ""
}

const SearchBar = ({ onSetSearchQuery }) => {
    const handleSubmit = (values) => {
        if (!values.searchTerm.trim()) {
            toast.error("Please enter a search term");
            return;
        }
        onSetSearchQuery(values.searchTerm.trim());
    };

    return (
        <Formik initialValues={initialValues} validationSchema={searchFormSchema} onSubmit={handleSubmit}>
            <header className={css.header}>
                <Form>
                    <button className={css.button} type="submit" aria-label="Search"><CiSearch /></button>
                    <Field
                        type="text"
                        name="searchTerm"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </header>
        </Formik>
    );
};

export default SearchBar;