import React from "react";
import { Link } from "react-router-dom";

function Assessment(){
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Final Assesstments</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Group id</th>
                          <th>Project id</th>
                          <th>Project title</th>
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
                          <th>PPT name</th>
                          <th>view</th>
                          <th>Report name</th>
                          <th>view</th>
                          <th>button</th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                            <td>01 March 2023</td>
                            <td>06 March 2023</td>
                            <td>file name</td>
                            <td></td>
                            <td>button</td>
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

export default Assessment;