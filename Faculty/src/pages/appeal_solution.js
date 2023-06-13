import React from "react";
import { Link } from "react-router-dom";

function Solution(){
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Reply from Project Co-ordinator</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>name</th>
                        </tr>  
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0"></p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Request date</th>
                          <th>Request</th>
                          <th>Reply</th>
                          <th>Reply date</th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                            <td>01 March 2023</td>
                            <td>Search Engine Marketing</td>
                            <td>21 Sep 2018</td>
                            <td>time</td>
                            <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </>
    );
}

export default Solution;