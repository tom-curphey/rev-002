import React from "react"
import MyForm from "./components/shared/formElements"

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      Ola Kalindi
      <br />
      <MyForm
        onSubmit={({ firstName, lastName, email }) => {
          console.log("Form", firstName, lastName, email)
        }}
      />
    </div>
  )
}

export default App
