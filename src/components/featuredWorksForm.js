import React, { useState } from 'react';

function validateForm(data){
  let d = Object.getOwnPropertyNames(data);
  for(let i=0; i< d.length; i++){
    if(data[d[i]] === null) return 0;
  }
  return 1;
}

function FeaturedWorksUpload(){
  const fileInput = React.createRef();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name : null,
    title: null,
    class: null,
    description: null,
    link: "https://google.com",
  });

  const [image, setImage] = useState({
    stream: null,
    name: null,
    type: null,
    size: null
  });

  function handleImageUpload(img){
    //do all processing here
    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = (e) => {
        if (e.target.readyState === reader.DONE) { //2 means finished loading
            // console.log(e.target.result);
            setImage({
                ...image,
              stream: e.target.result.replace('data:image/jpeg;base64,',''),
              name: img.name,
              type: img.type,
              size: img.size
            });
        }
    }
  }
  function handleClick(){
    if (validateForm(formData) && validateForm(image) !== null){
        //POST DATA TO DRUPAL
        fetch('/api/featured_works/add' , {method: 'POST', body: JSON.stringify({data: formData, img: image})})
        .then( res => res.json())
        .then( res => {
            if(res.status === "success"){
                setSubmitted(!submitted);
            }
            else{
                console.log("ERROR uploading to DRUPAL");
            }
        })
        .catch( err => console.log(err));
    }
    else{
      alert("Please fill out all of the fields!");
    }
  }
  function handleLoad(e){
    //image must be square
    const w = e.target.naturalWidth;
    const h = e.target.naturalHeight;
    if(w !== h){
      setImage({...image, stream: null, name: null, type: null, size: null});
      alert("Image must be a square");
    }
    if( w < 500 || w > 800){
      setImage({...image, stream: null, name: null, type: null, size: null});
      alert("Image is too big or small. It mst be 400 x 400 to 800 x 800 pixels");
    }
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  if(submitted){
     return(
      <p> Your project has been submitted for review. Check back later to see if its featured! If you have questions, please email example@example.com</p>
     )
  }
  else{
    return(
        <div id="submit-project-form">
          <p>
            Please review your information before submitting. You cannot change any information once its been submitted
          </p>
          Your Name 
          <br/>
          <input name = "name" value = {formData.name} onChange = {e => handleChange(e)}/> <br/>
          Project Title <br/> <input name = "title" value = {formData.title} onChange = {e => handleChange(e)}/> <br/>
          Class (Enter 'Other' for non related coursework) <br/> <input name="class" value = {formData.class} onChange = {e => handleChange(e)}/> <br/>
          Description of Your Project
          <br/>
          <textarea name="description" 
            value = {formData.description} 
            onChange = {e => handleChange(e)} 
            placeholder="Enter a description of your project here" rows= "10" cols="80"/>
          <br/>
          URL to Project Blog / Site
          <br/>
          <input name="projectUrl" value={formData.link} onChange={e => handleChange(e)} />
          <br/>
          Project Thumbnail (Image must be squre from 400px to 800px)
          <br/>
          <input type="file" 
            ref={fileInput} 
            accept="image/jpg, image/jpeg, image/png" 
            onChange = {e => handleImageUpload((e.target.files)[0])} />
          <br/>
          {image.stream ? <img src= {"data:image/jpeg;base64," + image.stream} alt="upload" width= "100" height="100" onLoad={ e => handleLoad(e)}/> : null}
          <br/>
          <button className="submit-project-button" onClick = { () => handleClick()} > Submit </button>
        </div>
    );
  }
}

export default FeaturedWorksUpload;