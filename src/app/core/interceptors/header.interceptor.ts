import { HttpInterceptorFn } from '@angular/common/http';

const API_KEYS = {
  default: {
    host: "ai-diet-planner.p.rapidapi.com",
    key: "780e2aff68mshcc5c23db4575b4ap101d6fjsn535ff02a20e5"
  },
  bmi: {
    host: "body-mass-index-bmi-calculator.p.rapidapi.com",
    key: "b0f0be48e2mshe1d7a06c013bf1dp17c1e1jsnc09517851f4c"
  },
  exercise: {
    host: "exercisedb.p.rapidapi.com",
    key: "09fd9e4d6fmsh90149e37319720fp17a76ajsn651ca6589d9a"
  }
};

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    "x-rapidapi-host": API_KEYS.default.host,
    "x-rapidapi-key": API_KEYS.default.key
  };

  if (req.url.includes('bmi')) {
    headers["x-rapidapi-host"] = API_KEYS.bmi.host;
    headers["x-rapidapi-key"] = API_KEYS.bmi.key;
  }

 
  if (req.url.includes('exercise')) {
    headers["x-rapidapi-host"] = API_KEYS.exercise.host;
    headers["x-rapidapi-key"] = API_KEYS.exercise.key;
  }

  
  const socialToken = localStorage.getItem("socialToken");
  if (socialToken) {
    headers["token"] = socialToken;
  }


   req= req.clone({ setHeaders: headers });

  return next(req);
};

