import React from 'react';

// export default function useLocalStorage(
//   key,
//   defaultValue = '',
//   { serialize = JSON.stringify, deserialize = JSON.parse } = {}
// ) {
//   const [state, setState] = React.useState(() => {
//     const valueInLocalStorage = window.localStorage.getItem(key);
//     if (valueInLocalStorage) {
//       // we are doing the try catch in case the localStorage value was set before we had the serialization in place
//       try {
//         return deserialize(valueInLocalStorage);
//       } catch (error) {
//         window.localStorage.removeItem(key);
//       }
//     }
//     return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
//   });

//   const prevKeyRef = React.useRef(key);
//   React.useEffect(() => {
//     const prevKey = prevKeyRef.current;
//     if (prevKey !== key) {
//       window.localStorage.removeItem(prevKey);
//     }
//     prevKeyRef.current = key;
//     window.localStorage.setItem(key, serialize(state));
//   }, [state, serialize, key]);

//   return [state, setState];
// }

export default function useLocalStorage(key, initialValue) {    	
    const [storedValue, setStoredValue] = React.useState(() => {	
      try {           	
        const item = window.localStorage.getItem(key);        	
        return item ? JSON.parse(item) : initialValue;	
      } catch (error) {            	
        console.log(error);	
        return initialValue;	
      }	
    });                	
    const setValue = value => {	
      try {            	
        const valueToStore =	
          value instanceof Function ? value(storedValue) : value;            	
        setStoredValue(valueToStore);            	
        window.localStorage.setItem(key, JSON.stringify(valueToStore));	
      } catch (error) {            	
        console.log(error);	
      }	
    };	

    return [storedValue, setValue];	
}