import React from "react";
import { Link } from "react-router-dom";
import App from "../App";

function Appeal(){
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Make a appeal to Project Co-ordinator</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-description">
                    Use the <code>.form</code> to make a appeal to Project Co-ordinator.</p>
                    <form class="form-inline">
                    <label class="sr-only" for="inlineFormInputName2">ID</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="id"/>
                    
                    <label class="sr-only" for="inlineFormInputGroupUsername2">Name</label>
                    <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="name"/>
                    </div>
                    <label class="sr-only" for="inlineFormInputGroupUsername2">Request</label>
                    <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="request"/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default Appeal;