import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5174/cars/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 offset-lg-3">
          <div className="card">
            <div className="card-header">
              <h2>Car Detail</h2>
            </div>
            {carData && (
              <div className="card-body">
                <img
                  src={carData.image + "&" + carData.id}
                  alt="Car"
                  className="img-fluid mb-3"
                />
                <div className="card-text">
                  <h3>
                    (ID: {carData.id})
                  </h3>
                  <h4>Car Details:</h4>
                  <ul className="list-group">
                  <li className="list-group-item">brand: {carData.brand}</li>
                  <li className="list-group-item">model: {carData.model}</li>
                    <li className="list-group-item">Year: {carData.year}</li>
                    <li className="list-group-item">Color: {carData.color}</li>
                  </ul>
                </div>
                <Link to="/" className="btn btn-danger mt-3">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
