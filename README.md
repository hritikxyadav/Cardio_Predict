# CardioPredict – Heart Disease Risk Prediction System

**CardioPredict** is an academic machine-learning web application designed to estimate the risk of heart disease from a patient's clinical attributes. The system uses a **Random Forest Classifier** trained on a heart disease dataset containing **1,888 patient records and 13 input features**.

The application allows users to enter patient-related parameters such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, resting ECG results, maximum heart rate (`thalachh`), exercise-induced angina, ST depression (`oldpeak`), slope, number of major vessels (`ca`), and thalassemia-related information (`thal`).

The trained Random Forest model processes these inputs and generates a **heart disease prediction along with a probability score and corresponding risk category**. The system also provides model-performance insights including accuracy, precision, recall, F1-score, confusion matrix, ROC/AUC analysis, feature importance, learning curve, and comparison with other machine-learning algorithms.

CardioPredict is implemented as a modern full-stack application with a **Next.js/React/TypeScript frontend** and a **Python Flask/FastAPI backend**. The trained ML pipeline is stored using `joblib` and loaded by the backend for real-time predictions through a REST API.

The project focuses on combining **machine learning, healthcare analytics, and modern web development** into an interactive system that demonstrates how predictive models can be integrated into practical applications.

> **Disclaimer:** CardioPredict is developed for academic, educational, and research purposes only. It is not a medical diagnostic tool and should not replace professional medical advice.
