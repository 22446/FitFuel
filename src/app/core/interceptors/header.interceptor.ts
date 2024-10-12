import { HttpInterceptorFn } from '@angular/common/http';

const API_KEYS = {
  default: {
    host: "ai-diet-planner.p.rapidapi.com",
    key: "073874f6b2msh0e0d3e54b82b5d4p1c0acbjsn0a7605cd3ce9"
  },
  bmi: {
    host: "body-mass-index-bmi-calculator.p.rapidapi.com",
    key: "2187c61239msh487ba793ef80f98p1c0d4ajsn51385c06d2f9"
  },
  exercise: {
    host: "exercisedb.p.rapidapi.com",
    key: "2187c61239msh487ba793ef80f98p1c0d4ajsn51385c06d2f9"
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

