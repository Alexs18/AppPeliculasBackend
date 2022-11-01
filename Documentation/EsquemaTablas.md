# Se creo el siguiente esquema en postgrest #

```sql
    create table peliculas(
	id serial,
	descripcion varchar(25)
)

alter table peliculas add column idusuario BIGINT

select * from peliculas
update peliculas set idusuario = 1 

create table users(
	id serial PRIMARY key not null,
	nombre VARCHAR(20) not null,
	apellido VARCHAR(20) not null
)

create table roluser(
	id serial primary key not null,
	idusuario BIGINT not null,
	descripcion VARCHAR(20) not null,
	CONSTRAINT fk_users FOREIGN KEY (idusuario)
      REFERENCES users (id) MATCH SIMPLE
)

insert into users (nombre, apellido) values ('Pablo', 'Khols')

insert into users (nombre, apellido) values ('Alexis', 'Lopez')
insert into roluser (idusuario, descripcion) values (1, 'Gerente')
insert into roluser (idusuario, descripcion) values (2, 'Desarrollador')

select u.nombre, r.descripcion, (pe.descripcion) as pelis from users as u
	left join peliculas as pe
on u.id = pe.idusuario
	inner join roluser as r
on u.id = r.idusuario


insert into peliculas (descripcion) values('Los vengadores')
insert into peliculas (descripcion) values('Ant Man 1')
```