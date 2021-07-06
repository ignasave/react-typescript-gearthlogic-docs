# React Typescript Gearthlogic Docs

En este proyecto y documentacion definiremos las  practicas y patrones a utilizar en los proyectos que afrontara la empresa, para mantener una base de codigo consistente y limpia.  


# Estructura

La estructura de las aplicaciones es muy importante a la hora de mantener y ayudar a que un nuevo developer entre en un proyecto sin estar horas revisando donde esta cada elemento, por esto se definen las siguientes reglas para crear la estructura de carpetas y archivos adentro del *src*

    |-assets
	|   |-fonts
	|       |-SansSerif.tts	
	|   |-images
	|   	|-appLogo.png
	|-components
	|	|-App
	|	|	|-App.test.tsx
	|	|	|-index.tsx
	|	|-ClientFolder
	|	|	|-Clients
	|	|	|	|-index.tsx
	|	|	|	|-Clients.test.tsx
	|	|	|	|-styles.css
	|	|	|-ClientInfo
	|	|	|	|-index.tsx
	|	|	|	|-styles.css
	|	|	|-ClientHistory
	|	|	|	|-index.tsx
	|	|	|	|-styles.css
	|-sharedComponetns
	|	|-Button
	|	|	|-index.tsx
	|	|	|-styles.css
	|-hooks
	|	|-useFetch
	|	|	|-index.ts   
	|	|	|-reducer.ts
	|-redux
	|	|-actions
	|	|	|-index.ts
	|	|	|-clients.ts
	|	|-reducers
	|	|	|-index.ts
	|	|	|-clients.ts
	|	|-types
	|	|	|-index.ts
	|	|	|-clients.ts
	|-routes
	|	|-paths.ts
	|	|-roles.ts
	|	|-index.ts
	|-services
	|	|-api
	|	|	|-clients.ts
	|	|-toast.ts
	|-utils
	|	|-dates.ts
	|-index.tsx
### **Desgloce:**
**assets:** 
Aqui iran todos archivos que normalmente podrian ser de "media" ( imagenes, fuentes, gifs, svg, etc )  

**components:** 
Aqui iran todos los componentes que son referidos a pantallas de la aplicacion, seguidos por "*Folder*"  y adentro de este directorio iran los componentes que son usados solamente por esta pantalla .Por ejemplo, si tenemos la pantalla home en nuestra app:

   	|-components
	|	|-HomeFolder
	|	|	|-Home
	|	|	|	|-index.tsx
	|	|	|	|-Home.test.tsx
	|	|	|	|-styles.css
	|	|	|-HomeChat
	|	|	|	|-index.tsx
	|	|	|	|-styles.css
	

**sharedComponents:** 
Aqui van todos los componentes que seran utilizados por varias pantallas de la aplicacion o que se estiman que pueden ser de utilidad para el futuro en otros lugares de la app.
La forma de estructura sera igual que en componentes exeptuando la agrupacion por pantalla.

**hooks:** 
Aqui iran los hooks que se usaran en la aplicacion, pueden ir agrupados por carpeta en caso de que el hook requiera mas de un archivo o simplemente el archivo del hook en lowerCamelCase.
 
**redux:** 
Aqui ira toda la logica relacionada con redux.
Estara separado en 3 carpetas que contendran los aspectos separados de redux:


> actions, reducers y types

En los 3 directorios tendran un archivo index, en el caso de actions y types haran 

    export * from './file'
de los archivos contenidos en los directorios
y en la carpeta reducer el archivo index combinara los reducers contenidos en los directorios.

**routes:** 
Aqui iran definida toda la logica relacionada con las rutas, perfiles y movimiento de pantallas de la aplicacion. Hay reglas comunes que son extrapolables a todas las aplicaciones que seran explicadas mas adelante.

**services:** 
Aqui iran todos los servicios utilizados por la aplicacion, los mas comunes son: apis, toasts, notifications, etc.

**utils:**
Aqui iran todas aquellas funciones que se pueden usar en toda la aplicacion que sean de utilidad, ejemplos funciones de conversion de fechas,  formateo de texto, etc.

### **Reglas:**
**Directorios:** 
lowerCamelCase siempre que no contengan componentes, en ese caso seran  UpperCamelCase,
Los componentes siempre estaran contenidos en carpetas, con un index el cual exportara por default el componente principal. Los subcomponentes deben ir en carpetas al igual que sus padres.
Los estilos deben ir en la misma carpeta del componente al igual que los archivos de test y archivos adicionales que el componente necesite pero que no se compartan mas alla de sus subcarpetas. En tal caso esas dependencias deberan recaer en alguna de los otros directorios principales.

**Archivos:**
Componentes: 
Debe finalizar con .tsx en vez de .ts o (jsx en vez de js) esto define que nuestro archivo contiene codigo react.
UpperCamelCase solo en el caso de que por algun motivo no se encuentre contenido en un directorio el cual tendra UpperCamelCase, sino sera un archivo index.tsx.

Otros archivos ts: 
lowerCamelCase, mantener nombres cortos pero descriptivos.

Otros archivos: 
Usar la practica correspondiente de nombres para cada tipo de archivo.





# Librerias y convenciones para los proyectos

Es importante mantener un stack de librerias que solventan problemas comunes a la mayoria de aplicaciones que sean consistentes y reusables, esto ayudara a la hora de transladarse de aplicaciones y transferir el conocimento de una app a otra.

**Requests**:
axios https://www.npmjs.com/package/axios
**Formularios**: 
react-hook-form https://react-hook-form.com
**Validacion de Formulario**: 
yup https://github.com/jquense/yup
**Rutas**
react-router https://reactrouter.com/web/guides/quick-start
**Estado Global**
redux
https://es.redux.js.org
**Sistema de Grilla**
bootstrap
https://getbootstrap.com/docs/5.0/getting-started/introduction/
**Material Design Components**
material-ui
https://material-ui.com
**Basic Components**
prime-react
https://www.primefaces.org/primereact/showcase/#/
