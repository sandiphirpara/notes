import {  useEffect, useState } from "react";
import styles from "../pages/index.module.css";
import { useFormik  } from "formik";
import * as Yup from "yup";
import TextInput from "components/Form/TextInput";
import PrimaryButton from "components/Button/PrimaryButton";
import Form from "components/Form/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {addNotes,editNotes} from "../store/actions"
import { useParams } from "react-router-dom";
const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required("Title is required."),
    note:Yup.string().trim().required("Note is required."),
});

const initialValues = {
    title: "",
    note:"",
};

const AddEditNotes = () => {
    const dispatch = useDispatch()
    const { id } = useParams()  
    const { notes } = useSelector(state => state.Dashboard)
    const [edata,setEdata] = useState([]);    
    
   useEffect(()=> {
       notes.map((item,i) => {
        if(+id===i){
            setEdata({
              title:item.title,
              note:item.note
            })                                     
        }
        return id 
       })       
    },[notes,id])
            
    const formik = useFormik({
        initialValues: edata?.length ? edata :initialValues,
        validationSchema,
        onSubmit: values => {     
            //disptch login api     
            if(id){
                console.log("edit",values);
                dispatch(editNotes({...values,id}))
            }else{       
             dispatch(addNotes(values))
             formik.resetForm();
            }           
        },
    });

    
    return (
        <div className={styles.category_boxes}>
            <Link to="/dashboard">Back</Link>
            <div className={styles.box}>
             <Form onSubmit={formik.handleSubmit}>
                        <div className="form-text">
                            <TextInput
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                defaultValue={edata?.title}
                                value={edata?.title ? edata?.title : formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    !!formik.errors.title &&
                                    !!formik.touched.title
                                        ? formik.errors.title
                                        : ""
                                }
                            />
                        </div>
                        <div className="form-text">
                            <textarea    
                                className={styles.textarea}                            
                                placeholder="Enter Your Note"
                                name="note"
                                defaultValue={notes[id]?.note}
                                value={edata?.note ? edata?.note : formik.values.note}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                            ></textarea>
                            <span className="error-message">{
                                    !!formik.errors.note &&
                                    !!formik.touched.note
                                        ? formik.errors.note
                                        : ""
                                }</span>
                        </div>
                        <div className="d-flex justify-content-end mt-3">        
                        <PrimaryButton
                            type="submit"
                            className={styles.btn_long}
                        >
                            Save
                        </PrimaryButton>
                        </div>
                    </Form>
            
                
            </div>
        </div>
    );
};

export default AddEditNotes;
