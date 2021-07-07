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


# Guia para escribir react
Siempre se puede mejorar la calidad de nuestro codigo, y para eso hay reglas que deberiamos seguir para conseguir un codigo homogeneo independientemente de trabaje en cualquier proyecto que se presente.

### Mantener los componentes lo mas chico posible
La idea es bastante simple, cada componente deberia ocuparse de 1 sola tarea, aunque sea tedioso al principio, a la hora de mantener la aplicacion ahorrara horas de debugs y dolores de cabeza.
Los componentes como maximo deberian tener 250 lineas. si estamos hablando de un componente que realiza muchas tareas, o tiene bastante logica, la cual deberiamos buscar formas de reducir a toda costa.
Para lograr esto deberiamos: 

 1. Crear componentes hijos intentando separar cada pequeña parte del componente.
 2. Sacar informacion y logica del componente, creando custom hooks, armando funciones fuera del archivo del componente.
 3. Usar destructuring, y shorthandlers de javascript moderno para ahorrar codigo y hacerlo mas legible, arrow functions.
 4. Pasar logica tambien como acciones globales, o como servicios aplicados desde otro lugar de la aplicacion.

 ### Pensar en reusabilidad
 Al igual que en el punto de arriba, puede ser tedioso al principio pero puede ahorrar mucho a futuro cuando no solo hacemos los componentes funcionales a lo que nos piden hoy en el ticket, sino pensar si lo que estamos haciendo puede hacerse reusable de alguna forma, sea tanto sacando la logica del componente, creando algo que sea en su base generico, y luego creando arriba de esa base el componente deseado, asi la base se puede reutilizar.
 
 NO TE REPITAS!
 
 ### Eliminar div innecesarios
 En vez de esto: 
 

    return(
	    <div>
		    <li>Content</li>
	    </div>
    );

Esto: 

    return(
	    <li>Content</li>
    );
O si no es posible ya que contiene 2+ elementos y react nos tira error, podemos usar un fragment:

    return(
	    <>
		    <li>Content</li>
		    <li>Content</li>
		    <li>Content</li>
	    </>
    );

 ### Eliminar comentarios y console.log antes de los commits
 Es importante depurar nuestro codigo antes de hacer un commit, cuando dejamos codigo comentado debe tener un buen motivo por lo cual ese codigo esta asi, de otra forma solo usa espacio y se hace mas dificil de entender. Lo mismo que los console log, que ademas de lo anterior, es un peligro de seguridad y queda poco profesional. No debe quedar ningun console.log en los commits.
 
 ### Usar buenos comentarios
 Los comentarios solo deberian usarse para explicar una funcion compleja y/o que puede llegar a ser dificil de entender por solo el nombre, es decir, una funcion deberia poder explicarse sola por el nombre, no importa que sea un poco largo. Ejemplo una funcion que obtiene todos productos de una coleccion dada el id de la collecion:
 

    getProductsFromCollectionByID(collectionID: string)

 Y en caso que tengamos una funcion que hace algo complejo de explicar o muy largo, en ese caso podemos usar un comentario para la funcion.
 Otro caso en el que podemos usar comentarios es para separar el codigo, por ejemplo si tenemos un componente que tiene estado, y handlers podemos hacer un comentario //State y //Handlers

  ### No usar el index como key en un map al renderizar un componente
  Esto puede provocar bugs a la hora de renderizar, en vez de esto, intentar utilizar propiedades del elemento a mapear o como ultimo recurso, si no hay ningun valor que no se repita entre nuestro arreglo, usar *react-uuid* https://www.npmjs.com/package/uuid
  
  
 ### Usar bien los operadores ternarios y renderizado condicional en react

Cuando tenemos un componente que debemos renderizar condicionalmente, podemos usar el operador and poniendo el componente en segunda posicion, ya que JavaScript cuando lee un operador and, si la primera parte es falsa no leera la segunda parte. Ejemplo:
En vez de:

    return loginAttempts < maxAttempts ? <Componente/> : null

Debemos hacer:

    return loginAttempts < maxAttempts && <Componente/>

Queda muy elegante, pero hay que evitar anidar tanto los operadores ternarios como los condicionales sin if ya que pueden convertirse en una maraña imposible de seguir muy rapido, si es posible tratar de no anidar en ninguna situacion.

 ### Evitar estilos en linea
A menos que no haya otra forma viable de estilar los componentes, no deberiamos nunca usar  estilos en linea en el metodo render, ya que se vuelven imposible de mantener los proyectos grandes.

 ### Evitar usar varias librerias de estilos / componentes
 Lo ideal es no usar ninguna libreria.
 No deberia haber mas de 2 librerias de estilos en el mismo proyecto, si es posible dejarlo en 1 e intentar crear nuestros propios estilos, ya que termina siendo mas complicado entender los estilos que la logica del programa.

### Evitar funciones anonimas
Mientras que las funciones anonimas son una buena forma de pasar una function prop (especialmente las que necesitan ser invocadas con otra prop como parametro), estas obtienen una referencia distinta en cada render. Al igual que los estilos en linea mencionados arriba. Para mantener la misma referencia a una funcion que pasas como prop podes declararla como un metodo de clase (si es un componente clase) o utilizar el hook `useCallback` si es un componente funcional.
A veces se necesita una referencia diferente por cada set de parametro con las cuales se invoca la funcion ejemplo una funcion calculada adentro de un .map, se puede utilizar memorize functions como lodash’s memoize  https://lodash.com/docs/4.17.11#memoize
Que seria "function catching" y nos ayuda a tener una referencia fija en un numero dinamico de funciones anonimas al costo de memoria del navegador.
 Obviamente hay veces en las que las funciones inline son la forma mas facil y no causan un problema de performance. Puede ser por que o estamos en un componente muy liviano o por que el componente padre necesita hacer  re-render de todo su contenido cada vez que cambia sus props (o no te importa ya que igualmente se va a re-rendizar). 
Una ultima cosa para remarcar es que por default las funciones render-props son anonimas. Cuando utilizas una funcion como el `children` de un componente, podes definirlo afuera del componente asi tiene una referencia fija

    //no hagas esto!
    const Component = (props) => {
    return <AnotherComponent onChange={() => props.callback(props.id)} />
    }
    
    //hace esto!
    
    const Component = (props) => {
    const handleChange = useCallback(() => props.callback(props.id), [props.id]);
    return <AnotherComponent onChange={handleChange} />
    }
    
    // o esto para class-based components :)
    
    class Component extends React.Component {
   
    handleChange = () => {
    
    this.props.callback(this.props.id)
    
    }
    
    render() {
    
    return <AnotherComponent onChange={this.handleChange} />
    
    }
    
    }

 
 ### Usar destructuracion
 
En vez de:

    const Component = (props) => {
		const [stateA, setStateA] = useState(prop.A)
		const [stateB, setStateB] = useState(prop.B)
	
		return(<div></div>)
    }


Debemos hacer:

        const Component = ({A, B}) => {
		const [stateA, setStateA] = useState(A)
		const [stateB, setStateB] = useState(B)
	
		return(<div></div>)
    }

 ### Organizar la importacion de modulos
Parece algo poco importante, pero ayuda mucho a la hora de leer lo que sucede afuera de nuestro componente y cuales son las dependencias externas de nuestros archivos. 
La forma en cual podemos ordenar nuestros imports es:

    - Modulos principales y de funcionalidad 
	    (React, Redux, Router)
    - Componentes de Librerias
	    (Material UI, PrimeReact)
	- Componentes del Proyecto

Estas secciones basta con separarlas con un salto de linea para que sea mucho mas legible.
Adentro de estas secciones podemos ordenarlas por orden alfabetico o por el tamaño del import, personalmente prefiero ordenarlos por el tamaño del import ya que aporta a la visibilidad de los modulos, y ordenar alfabeticamente toma mucho mas tiempo sin aportar mucho al orden.
Ejemplo:  

Se ve mucho mejor esto
    
    import  React, { useEffect, useState } from  'react';
    import { ScrollView, StyleSheet, View, Share, TouchableOpacity } from  'react-native';
    import { RootStateOrAny, useDispatch, useSelector } from  'react-redux';
    import { OptionValue } from  'shopify-buy';
    
    import { downloadArrayFiles } from  '../../services/download';
    import { FAVORITE_MODAL_TOGGLE } from  '../../redux/types';
    import  ProductCard  from  '../../components/ProductCard';
    import  TextWrap  from  '../../components/TextWrap';
    import  Loader  from  '../../components/Loader';
    import  colors  from  '../../resources/colors';
    import  TopBar  from  './TopBar';

A esto

    import  React, { useEffect, useState } from  'react';
    import { OptionValue } from  'shopify-buy';
    import { downloadArrayFiles } from  '../../services/download';
    import  TopBar  from  './TopBar';
    import { ScrollView, StyleSheet, View, Share, TouchableOpacity } from  'react-native';
    import  Loader  from  '../../components/Loader';
    import { RootStateOrAny, useDispatch, useSelector } from  'react-redux';
    import  colors  from  '../../resources/colors';
    import  TextWrap  from  '../../components/TextWrap';
    import { FAVORITE_MODAL_TOGGLE } from  '../../redux/types';
    import  ProductCard  from  '../../components/ProductCard';
    
    
 ### Usar siempre formateadores de codigo
Este paso tambien es importante que configuremos un formateador de codigo y se use una unica configuracion por proyecto y si es posible mantenerla entre proyectos, para esto podemos usar Prettier para VisualStudioCode, esto nos ayudara a no tener que preocuparnos por la identacion, espaciado ni nada por el estilo, simplemente le damos a formatear y listo! pero es importante no commitear ningun archivo sin formatear para mantener la coherencia visual del codigo.
 


    

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
**Dates**
date-fns
https://date-fns.org
