import React from 'react';
import { faShareAlt, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const CartItem = () => {
  return (
    <>
     <div className="row">
        <div className="col-2"><img className="img-responsive" src="http://placehold.it/100x70" alt="placeholder" /></div>
            <div className="col-4">
                <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-end">
                        <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control input-sm" value="1" />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-link btn">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </>
  )
};