import React from "react";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";
import { UserData } from "../components/data";
import LineChart from "@/components/chart";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.userLost),
    datasets: [
      {
        label: "Spending Score",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [predictionData, setPredictionData] = useState(null); // Estado para armazenar a resposta do backend
  const [inputValues, setInputValues] = useState({
    CustomerID: "",
    Gender: "",
    Age: "",
    Annual: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      CustomerID: parseFloat(inputValues.CustomerID),
      Gender: parseInt(inputValues.Gender),
      Age: parseFloat(inputValues.Age),
      Annual: parseFloat(inputValues.Annual),
    };

    try {
      const response = await fetch("http://34.196.126.149/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const data = await response.json();
        setPredictionData(data);
      } else {
        console.error("Erro ao fazer a solicitação");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.title}>Dashboard</h1>

        <div style={{ width: 500 }}>
          <LineChart chartData={userData} />
        </div>
        <input
          className={styles.login}
          type="text"
          placeholder="ID"
          name="CustomerID"
          value={inputValues.CustomerID}
          onChange={handleInputChange}
        />
        <input
          className={styles.login}
          type="text"
          name="Gender"
          placeholder="Gender"
          value={inputValues.Gender}
          onChange={handleInputChange}
        />
        <input
          className={styles.login}
          type="text"
          name="Age"
          placeholder="Age"
          value={inputValues.Age}
          onChange={handleInputChange}
        />
        <input
          className={styles.login}
          type="text"
          name="Annual"
          placeholder="Annual Income"
          value={inputValues.Annual}
          onChange={handleInputChange}
        />
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Enviar dados para predição
        </button>

        {predictionData && (
          <div className={styles.prediction}>
            <h2>Prediction Result:</h2>
            <p>{predictionData.prediction}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Dashboard;
