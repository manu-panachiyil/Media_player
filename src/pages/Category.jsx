import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addCategory, getAVideo, getAllcategory, updateCategory } from "../services/allAPI";
import {Row , Col} from 'react-bootstrap'
import VideoCard from './VideoCard'


function Category() {
  const [categoryName, SetInputCategory] = useState({});
  const [category, setCategory] = useState([]);

  //console.log(inputCategory);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //add category

  const handleAddCategory = async () => {
    if (categoryName) {
      let adddetails = {
        categoryName,
        allVideos: [],
      };
      const response = await addCategory(adddetails);
      if (response.status >= 200 && response.status < 300) {
        alert("Category successfully added");
        SetInputCategory("");
        handleClose();
      } else {
        alert("something went wrong");
      }
    } else {
      alert("Please fill th category");
    }
  };

  //get category
  const allCategory = async () => {
    const { data } = await getAllcategory();
    setCategory(data);
  };
  console.log(category);

//drag over

const dragover = (e) => {
  //this will prevent reload so that the data we send from videocard wont be lost
  e.preventDefault()
  console.log('inside drag over');
}

const videoDrop = async(e,categoryId) => {
  console.log(`dropped inside card  ${categoryId}`);
  //to get the video id that is sent from videocard component
  const videoid = e.dataTransfer.getData("videoID")
  console.log(videoid);

  //api to get the particular video that is dragged
  const {data} = await getAVideo(videoid)
  console.log(data);

  //to find the particular category with the specified id
  let selectedCategory = category?.find(item=>item.id===categoryId)
  console.log(selectedCategory);

  //data is added to the allvidos array in the particular category eith the specified id
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  await updateCategory(categoryId,selectedCategory);
  allCategory();
}


  useEffect(() => {
    allCategory();
  }, []);

  //drag started
  const dragStated = (e,id) => {
    console.log(`cardno : ${id} started dragging ${e.target}`);
    e.dataTransfer.setData("cardID",id)
  }

  return (

    <>
      <div>
        <button
          onClick={handleShow}
          className="btn btn-warning"
          style={{ width: "250px" }}
        >
          Add new Category
        </button>
      </div>



      {category.length > 0 ? (
        category.map((item) => (
          <div className="me-5 mt-5 border border-secondary rounded p-2 w-100">
            <div className="d-flex justify-content-between algn-items-center" droppable onDragOver={(e) => dragover(e)} onDrop={(e) => videoDrop(e,item?.id)}>
              <h6>{item.categoryName}</h6>
            
            <button className="btn btn-danger">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            </div>
            <Row>
              <Col sm={12}>
              {
                item.allVideos?.length > 0?
                item.allVideos.map(card => ( <VideoCard displayVideo={card} draggable onDragStart={(e) => dragStated(e,card?.id)}/> ))
                : <p>Nothing To Display</p>
              }
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <p>Nothing To Display</p>
      )}


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary p-3 rounded">
            <Form.Label>Category Name</Form.Label>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) => SetInputCategory(e.target.value)}
                placeholder="Enter Category Name"
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default Category;
