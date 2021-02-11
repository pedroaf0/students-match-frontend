const DevMode = false;
var src;
if(DevMode){
     src = {
        api: "http://localhost:3333/",
        imgApi: "http://localhost/"
    };
}else{
     src = {
        api: "https://students-match-backend.herokuapp.com/",
        imgApi: "https://students-match-img-service2.000webhostapp.com/"
    };
}



export default src;

