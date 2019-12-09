# Historias de Usuario

## Módulo Administración
# Características
```
El sistema permitirá ingresar usuario especificando el rol
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
 * `Y` se mostrará una ventana donde el usuario llenará los siguiente campos:
   * nombre: 'Anderson'
   * apellido: 'Revelo'
   * telefono: '0969696969'
 * `Y` el usuario hará clic en el botón Aceptar
 * `Y` se mostrará la lista de usuarios Actualizada.
 
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
El usuario Juan Perez
```
 



 

 