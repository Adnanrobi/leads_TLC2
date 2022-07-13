import React, { Component } from "react";
import "./CSS/todo.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TradeLicenseNo: "",
      BusinessOrganizationName: "",
      Name: "",
      FathersName: "",
      MothersName: "",
      Phone: "",
      Address: "",
      TypeOfBusiness: "",
      IssueDate: "",
      ExpiryDate: "",
      TradeLicenseFee: "",
      VATdeposit: "",
      CareerTax: "",
      AdvertisingTax: "",
      Arrears: "",
      ServiceCharge: "",
      Total: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTradeLicenseNo = (event) => {
    this.setState({
      TradeLicenseNo: event.target.value,
    });
  };
  handleBusinessOrganizationName = (event) => {
    this.setState({
      BusinessOrganizationName: event.target.value,
    });
  };
  handleName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleFathersName = (event) => {
    this.setState({
      FathersName: event.target.value,
    });
  };

  handleMothersName = (event) => {
    this.setState({
      MothersName: event.target.value,
    });
  };

  handlePhone = (event) => {
    this.setState({
      Phone: event.target.value,
    });
  };

  handleAddress = (event) => {
    this.setState({
      Address: event.target.value,
    });
  };

  handleTypeOfBusiness = (event) => {
    this.setState({
      TypeOfBusiness: event.target.value,
    });
  };

  handleIssueDate = (event) => {
    this.setState({
      IssueDate: event.target.value,
    });
  };

  handleExpiryDate = (event) => {
    this.setState({
      ExpiryDate: event.target.value,
    });
  };

  handleTradeLicenseFee = (event) => {
    this.setState({
      TradeLicenseFee: event.target.value,
    });
  };

  handleVATdeposit = (event) => {
    this.setState({
      VATdeposit: event.target.value,
    });
  };

  handleCareerTax = (event) => {
    this.setState({
      CareerTax: event.target.value,
    });
  };

  handleAdvertisingTax = (event) => {
    this.setState({
      AdvertisingTax: event.target.value,
    });
  };

  handleArrears = (event) => {
    this.setState({
      Arrears: event.target.value,
    });
  };

  handleServiceCharge = (event) => {
    this.setState({
      ServiceCharge: event.target.value,
    });
  };

  handleTotal = (event) => {
    this.setState({
      Total: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.Name} Registered Successfully !!!!`);
    console.log(this.state);
    this.setState({
      TradeLicenseNo: "",
      BusinessOrganizationName: "",
      Name: "",
      FathersName: "",
      MothersName: "",
      Phone: "",
      Address: "",
      TypeOfBusiness: "",
      IssueDate: "",
      ExpiryDate: "",
      TradeLicenseFee: "",
      VATdeposit: "",
      CareerTax: "",
      AdvertisingTax: "",
      Arrears: "",
      ServiceCharge: "",
      Total: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="main-contianer1">
        <form className="form" onSubmit={this.handleSubmit}>
          {/* <img class="border-full" src="https://certificate.upsheba.com/img/border-full.png"/> */}
          <img
            class="bd-gov"
            src="https://certificate.upsheba.com/img/bd-gov.png"
          />
          <h1>Trade License Certificate</h1>
          <div className="form__row">
            <label className="label">Trade License No. : </label>{" "}
            <input
              type="text"
              value={this.state.TradeLicenseNo}
              onChange={this.handleTradeLicenseNo}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">
              Name of the business organization :{" "}
            </label>{" "}
            <input
              type="text"
              value={this.state.BusinessOrganizationName}
              onChange={this.handleBusinessOrganizationName}
            />{" "}
          </div>
          <br />
          <div className="form__row">
            <label className="label">Name :</label>{" "}
            <input
              type="text"
              value={this.state.Name}
              onChange={this.handleName}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Father's/Husband's Name :</label>{" "}
            <input
              type="text"
              value={this.state.FathersName}
              onChange={this.handleFathersName}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Mother's Name :</label>{" "}
            <input
              type="text"
              value={this.state.MothersName}
              onChange={this.handleMothersName}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Phone :</label>{" "}
            <input
              type="text"
              value={this.state.Phone}
              onChange={this.handlePhone}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">
              Address of the business organization :
            </label>{" "}
            <input
              type="text"
              value={this.state.Address}
              onChange={this.handleAddress}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Type of Business :</label>{" "}
            <input
              type="text"
              value={this.state.TypeOfBusiness}
              onChange={this.handleTypeOfBusiness}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Date of Issue :</label>{" "}
            <input
              type="date"
              value={this.state.IssueDate}
              onChange={this.handleIssueDate}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Expiry Date :</label>{" "}
            <input
              type="date"
              value={this.state.ExpiryDate}
              onChange={this.handleExpiryDate}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Trade license fee (annually) :</label>{" "}
            <input
              type="text"
              value={this.state.TradeLicenseFee}
              onChange={this.handleTradeLicenseFee}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">15% VAT deposit :</label>{" "}
            <input
              type="text"
              value={this.state.VATdeposit}
              onChange={this.handleVATdeposit}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">
              Tax on career business and scholarship :
            </label>{" "}
            <input
              type="text"
              value={this.state.CareerTax}
              onChange={this.handleCareerTax}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Advertising tax (annually) :</label>{" "}
            <input
              type="text"
              value={this.state.AdvertisingTax}
              onChange={this.handleAdvertisingTax}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Arrears (annually) :</label>{" "}
            <input
              type="text"
              value={this.state.Arrears}
              onChange={this.handleArrears}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Service Charge (Annually) :</label>{" "}
            <input
              type="text"
              value={this.state.ServiceCharge}
              onChange={this.handleServiceCharge}
            />
          </div>
          <br />
          <div className="form__row">
            <label className="label">Total :</label>{" "}
            <input
              type="text"
              value={this.state.Total}
              onChange={this.handleTotal}
            />
          </div>
          <br />

          {/* <div className="uploadDiv">
            <label className="label">Signature1
              <input type="file" />
            </label>

            <label className="label">
              Signature2
              <input type="file" />
            </label>
          </div> */}

          <div className="form__row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
