import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)

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
            Total: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleTradeLicenseNo = (event) => {
        this.setState({
            TradeLicenseNo: event.target.value
        })
    }
    handleBusinessOrganizationName = (event) => {
        this.setState({
            BusinessOrganizationName: event.target.value
        })
    }
    handleName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    handleFathersName = (event) => {
        this.setState({
            FathersName: event.target.value
        })
    }

    handleMothersName = (event) => {
        this.setState({
            MothersName: event.target.value
        })
    }

    handlePhone = (event) => {
        this.setState({
            Phone: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            Address: event.target.value
        })
    }

    handleTypeOfBusiness = (event) => {
        this.setState({
            TypeOfBusiness: event.target.value
        })
    }

    handleIssueDate = (event) => {
        this.setState({
            IssueDate: event.target.value
        })
    }

    handleExpiryDate = (event) => {
        this.setState({
            ExpiryDate: event.target.value
        })
    }

    handleTradeLicenseFee = (event) => {
        this.setState({
            TradeLicenseFee: event.target.value
        })
    }

    handleVATdeposit = (event) => {
        this.setState({
            VATdeposit: event.target.value
        })
    }

    handleCareerTax = (event) => {
        this.setState({
            CareerTax: event.target.value
        })
    }

    handleAdvertisingTax = (event) => {
        this.setState({
            AdvertisingTax: event.target.value
        })
    }

    handleArrears = (event) => {
        this.setState({
            Arrears: event.target.value
        })
    }

    handleServiceCharge = (event) => {
        this.setState({
            ServiceCharge: event.target.value
        })
    }

    handleTotal = (event) => {
        this.setState({
            Total: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Name} Registered Successfully !!!!`)
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
            Total: ""
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className='main-contianer1'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h1>Trade License Certificate</h1>
                    <div className='form__row'><label className="label">Trade License No. : </label> <input type="text" value={this.state.TradeLicenseNo} onChange={this.handleTradeLicenseNo}/></div><br />
                    <label className="label">Name of the business organization : </label> <input type="text" value={this.state.BusinessOrganizationName} onChange={this.handleBusinessOrganizationName}  /><br />
                    <label className="label">Name :</label> <input type="text" value={this.state.Name} onChange={this.handleName}  /><br />
                    <label className="label">Father's/Husband's Name :</label> <input type="text" value={this.state.FathersName} onChange={this.handleFathersName}  /><br />
                    <label className="label">Mother's Name :</label> <input type="text" value={this.state.MothersName} onChange={this.handleMothersName}  /><br />
                    <label className="label">Phone :</label> <input type="text" value={this.state.Phone} onChange={this.handlePhone}  /><br />
                    <label className="label">Address of the business organization :</label> <input type="text" value={this.state.Address} onChange={this.handleAddress}  /><br />
                    <label className="label">Type of Business :</label> <input type="text" value={this.state.TypeOfBusiness} onChange={this.handleTypeOfBusiness}  /><br />
                    <label className="label">Date of Issue :</label> <input type="text" value={this.state.IssueDate} onChange={this.handleIssueDate}  /><br />
                    <label className="label">Expiry Date :</label> <input type="text" value={this.state.ExpiryDate} onChange={this.handleExpiryDate}  /><br />
                    <label className="label">Trade license fee (annually) :</label> <input type="text" value={this.state.TradeLicenseFee} onChange={this.handleTradeLicenseFee}  /><br />
                    <label className="label">15% VAT deposit :</label> <input type="text" value={this.state.VATdeposit} onChange={this.handleVATdeposit}  /><br />
                    <label className="label">Tax on career business and scholarship :</label> <input type="text" value={this.state.CareerTax} onChange={this.handleCareerTax}  /><br />
                    <label className="label">Advertising tax (annually) :</label> <input type="text" value={this.state.AdvertisingTax} onChange={this.handleAdvertisingTax}  /><br />
                    <label className="label">Arrears (annually) :</label> <input type="text" value={this.state.Arrears} onChange={this.handleArrears}  /><br />
                    <label className="label">Service Charge (Annually) :</label> <input type="text" value={this.state.ServiceCharge} onChange={this.handleServiceCharge}  /><br />
                    <label className="label">Total :</label> <input type="text" value={this.state.Total} onChange={this.handleTotal}  /><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
