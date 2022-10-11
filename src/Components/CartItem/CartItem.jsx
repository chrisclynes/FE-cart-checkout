import React from 'react';
import { faShareAlt, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const CartItem = ({  
        id,
        img,
        productName,
        productDescription,
        price,
        quantity,
        removeItem,
        updateQuantity,
        }
    ) => {
  return (
    <>
     <div className="row">
        <div className="col-2"><img className="img-responsive" src={img} alt="placeholder" /></div>
            <div className="col-4">
                <h4 className="product-name"><strong>{productName}</strong></h4><h4><small>{productDescription}</small></h4>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-end">
                        <h6><strong>{`$${price} `}<span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4">
                        <input type="number" 
                               className="form-control input-sm" 
                               value={quantity} 
                               onChange={(e) => updateQuantity(e.target.value, id)} />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-link btn" onClick={() => removeItem(id)}>
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