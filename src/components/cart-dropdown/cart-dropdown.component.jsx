import { React } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.style.scss";

const CartDropdown = ({cartDropdownIsHidden}) => (

    cartDropdownIsHidden ? null :
        (<div className="cart-dropdown">
            <div className="cart-items">
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>)

)

const mapStateToProps = (state) => ({
    cartDropdownIsHidden: state.cart.hidden
})

export default connect(mapStateToProps)(CartDropdown);