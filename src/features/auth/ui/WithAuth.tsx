import {Component} from "react";
import {authService} from "../../../app/api/model/auth.service";

export class WithAuth extends Component<any>{
   componentDidMount() {
      authService.getAuthMe()
         .then(res => {
            console.log(res)
         })
   }

   render() {
      return null;
   }
}