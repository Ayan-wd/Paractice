import React from 'react';
import { useNavigate } from 'react-router-dom';
import services from '../assets/services/services.jpg'

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services');
  };
  return (
    <div
      className="container"
      style={{  marginTop: '100px' }}
    >
      <div className="row align-items-center">
       
        <h1 style={{ fontWeight: "bold", marginBottom: "3rem",textAlign:'center',alignItems:'center' }}>Services</h1>
        <div
          className="col-md-6"
          style={{ padding: '20px', wordWrap: 'break-word' }}
        >
          <p className='services-text'>
          Our platform offers a comprehensive and innovative learning experience. We combine traditional teaching methods, which provide a solid foundation and time-tested structure, with the latest educational techniques, including interactive tools, multimedia content, and personalized learning paths. This blend ensures that students of all ages and backgrounds can engage with the material in a way that suits their individual learning style, helping them to grasp complex concepts more effectively and achieve their goals. Whether you prefer classic approaches or the newest in educational technology, our services are designed to make learning accessible, engaging, and impactful for everyone. 
          </p>
      
          <p className='btn-services'>For More Information:</p>
           <button
            
              style={{
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                transition: 'background-color 0.3s, transform 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            type="button"
            id="nav-button"
            className="btn btn-primary appointment-btn"
            onClick={handleClick}
            
          >
         <strong> Learn More</strong> <i className="bi bi-arrow-right"></i>
          </button>
        </div>

   
        <div
          className="col-md-6 d-flex align-items-center justify-content-center"
          style={{ height: '70%' }}
        >
          <img
             src={services}
            alt="Environment"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </div>
      </div>
      <div className="container my-4">
          <hr style={{ border: "1px solid black" }} />
        </div>
    </div>
  );
};

export default Services;
