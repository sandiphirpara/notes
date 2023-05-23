import { Link } from "react-router-dom";
import styles from "./index.module.css";
import penIcon from "../../../assets/images/pen-icon.png";
import deleteIcon from "../../../assets/images/delete-icon.png";
import { useDispatch, useSelector } from "react-redux"
import {deleteNotes} from "../store/actions"

const Dashboard = () => {    
    const dispatch = useDispatch()
    const { notes } = useSelector(state => state.Dashboard)
    

    const handleDelete = (id) =>{    
        dispatch(deleteNotes(id))
    }
    return (
        <>
        <div className="d-flex justify-content-end mt-5">        
            <Link to="/AddEditNotes" className={styles.btn_add}>Add Notes</Link>
        </div>
        <div className={styles.category_boxes}>
            <div className="row">

                {notes?.length > 0 ? 
                notes?.map((item,i)=>{
                    return item && 
                    <div className="col-lg-4 col-sm-4 col-xl-4 noteBox" key={i}>
                        <div className={styles.inner_boxes}>                        
                            <span>{item?.title}</span>                        
                        <div>
                        <Link to={`../AddEditNotes/${i}`}>
                        <img src={penIcon} className={styles.editIcon} alt="edit" />
                        </Link>
                        <img src={deleteIcon} className={styles.deleteIcon} alt="delete" onClick={()=>handleDelete(i)}/>
                        </div>
                    </div>                    
                </div>   
                }) : <h4 className="d-flex justify-content-center">No Notes Found</h4>}             
            </div>
        </div>
        </>
    );
};

export default Dashboard;
