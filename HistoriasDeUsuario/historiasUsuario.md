# Historias de Usuario

## Módulo Administración
### Características

```
- El sistema permitirá gestionar los usuarios creando, editando y deshabilitando usuarios
- El sistema permitirá gestionar los lugares creando, editando y deshabilitando lugares
```

### Antecedentes

```
El usuario Theo Coronel ingreso al sistema con rol de administrador y desea ingresar un usuario.
```

### Escenario


```
El usuario se encuentra en el módulo de Administracion y desea registrar un nuevo usuario
```

* `Dado` que el usuario se encuentra en el módulo de administración
* `Entonces` el usuario elegirá Gestión de Usuarios
* `Y` se presentará una ventana donde se listarán todos los usuario
* `Y` el usuario seleccionará "CREAR"
* `Y` se mostrará una ventana donde el usuario llenará los siguiente campos:
  * nombre: 'Anderson'
  * apellido: 'Revelo'
  * telefono: '0969696969'
  * password: '*******'
* `Y` el usuario hará clic en el botón Aceptar
* `Y` se mostrará la lista de usuarios Actualizada.


### Escenario


```
El usuario se encuentra en el módulo de Administracion y desea modificar un nuevo usuario
```

 * `Dado` que el usuario se encuentra en el módulo de administración
 * `Entonces` el usuario elegirá Gestión de Usuarios
 * `Y` se presentará una ventana donde se listarán todos los usuario
 * `Cuando` el usuario haya encontrado el usuario que quiere editar
 * `Entonces` el usuario seleccionará "Editar"
 * `Y` se mostrará una ventana donde el usuario llenará los siguientes campos:
   * nombre: 'Anderson'
   * apellido: 'Revelo'
   * telefono: '0969696969'
 * `Y` el usuario hará clic en el botón Aceptar
 * `Y` se mostrará la lista de usuarios Actualizada.

### Escenario


```
El usuario desea dar de baja a un usuario 
```
 
* `Dado` que el usuario se encuentra en el módulo de administración
* `Entonces` el usuario elegirá Gestión de Usuarios
* `Y` se presentará una ventana donde se listarán todos los usuario
* `Cuando` el usuario haya encontrado el usuario que quiere dar de baja
* `Entonces` seleccionará el deshabilitar
* `Y` se actualizará el estado del usuario.

### Escenario

```
El usuario desea registrar un lugar 
```
* `Dado` que el usuario se encuentra en el módulo de administración
* `Y` el usuario seleccionó gestion de lugar.
* `Entonces` se visualizará una tabla con los lugares con la siguiente información.

    | Edificio | Piso | Area | 
    | --- | --- | --- |
    | Olivos| 2 | Sistemas |
* `Y` el usuario seleccionará agregar un nuevo Lugar
* `Entonces` se abrirá una ventana para llenar la información del lugar.
* `Y` el usuario aceptará la información del nuevo lugar
* `Y` se actualizará la lista de los lugares.
  
### Escenario

```
El usuario desea editar un lugar 
```
* `Dado` que el usuario se encuentra en el módulo de administración
* `Y` el usuario seleccionó gestion de lugar.
* `Entonces` se visualizará una tabla con los lugares con la siguiente información.

    | Edificio | Piso | Area | 
    | --- | --- | --- |
* `Cuando` el usuario haya encontrado el lugar a editar
* `Entonces` elegirá el botón "Editar"
* `Entonces` se abrirá una ventana para llenar la nueva información del lugar.
* `Y` el usuario aceptará la información del nuevo lugar
* `Y` se actualizará la lista de los lugares. 
 
### Característica

```
El sistema permitira gestionar los sensores de un eficio.
```

### Escenario
```
El usuario Theo Coronel desea ingresar un sensor.
```

* `Dado` que el usuario se encuentra en el módulo de administración
* `Y` el usuario seleccionó gestion de sensores.
* `Entonces` se visualizará una tabla con los datos de sensores con la siguiente información.

    | idSensor | sensor | descripcion | 
    | --- | --- | --- |
* `Y` el usuario seleccionará el botón "Nuevo"
* `Y` se visualizará una ventana con la información: sensor, descripcion.
* `Y` el usuario hará clic en el botón "Aceptar".
* `Y` se actualizará la lista de los sensores. 


### Escenario
```
El usuario Theo Coronel desea asignar un sensor a una Area de un edificio.
```

* `Dado` que el usuario se encuentra en el módulo de administración
* `Y` el usuario seleccionó gestion de sensores.
* `Y` el usuario seleccionará el botón "Asignar Area"
* `Y` se visualizará una ventana para que el usuario especifica el area donde estaŕa el sensor.
* `Y` el usuario hará clic en el botón "Aceptar".


## Módulo de Reportes
 
### Caracteristica 


```
El sistema permitirá mostrar una lista de accesos a las distintas compuertas dentro del edificio.
```

## Antecedentes

```
El usuario Anderson Revelo ha ingreasado al sistema con rol General 
```

### Escenario

```
El usuario desea observar los registros de compuertas abiertas que se han hecho en el dia martes.
```
 * `Dado` que el usuario se encuentra en el módulo de Reportes
 * `Entonces` se presentará una ventana donde se listarán los reportes realizados ultimamente
 * `Y` el usuario buscará los reportes que se realizó un día martes confecha 22-09-2019
 * `Y` se mostrará un reporte con el historial de todas los accesos realizados ese día con la siguiente informaciópn:
   * Fecha 
   * Acción Realizada
 
 
 
 ## Módulo de DASHBOARD
 
 ### Características
 
 ```
El sistema permitirá visualizar el estado de todas las compuertas dento de un area en especifico, por ejemplo,
el area de sistemas en el piso 2.
```

### Escenario

```
El usuario Juan Perez necesita verificar los estados de las compuertas de su edificio.
```

* `Dado` que el usuario se encuentra en el módulo de DASHBOARD
* `Entonces` el usuario seleccionará el piso 2.
* `Y` se visualizará las Areas del piso 2.
* `Y` el usuario seleccionará la Area de Sistemas.
* `Entonces` se mostrarán indicadores de los estados de las puertas.

 


 