select * from peliculas

update peliculas set titulo ='Ant Man 1', genero = 'Ficcion',
descripcion = 'El sorprendente hombre hormiga'
where id = 4

update peliculas set descripcion = ''
where id = 5

alter table peliculas alter column descripcion Type character(200)


create table detallepelicula(
	id serial primary key,
	fecha_estreno date,
	Duracion time,
	Reparto varchar(100),
	Desc_Completa varchar(200),
	idPelicula bigint
)
select * from detallepelicula
insert into detallepelicula(fecha_estreno, Duracion, Reparto, Desc_Completa, idpelicula) 
values ('12-10-2022', '02:00:00', 'Alberth Einstein, Maguily cody',
	   'Tras una inminente amenaza los super heroes buscaran salvar la tierra', 1) 
insert into detallepelicula(fecha_estreno, Duracion, Reparto, Desc_Completa, idpelicula) 
values ('10-10-2018', '02:30:00', 'Mario Castañeda, Abrahm Mateo',
	   'Despues de Mucho tiempo nuestros heroes encuentran al legendario
		super sayain en namek', 2)	
		
insert into detallepelicula(fecha_estreno, Duracion, Reparto, Desc_Completa, idpelicula) 
values ('05-12-2018', '03:00:00', 'Arturo vidal, Mario Gonzales ,Andres Cobeña',
	   'Cietificos realizan un experimento para llevar a la humanidad
		a un nuevo mundo que coquistar', 3)
	   
insert into detallepelicula(fecha_estreno, Duracion, Reparto, Desc_Completa, idpelicula) 
values ('07-01-2015', '02:15:10', 'Sebastian Rodriguez, Alberto Maldonado, Sandra Guimenez',
	   'Para descubrir los secretos de la tierra un cientifico llega al reino cuantico', 4)
	   
insert into detallepelicula(fecha_estreno, Duracion, Reparto, Desc_Completa, idpelicula) 
values ('12-10-2009', '02:00:30', 'Leonardo Di Caprio, Tobey Maguiere, Andrew Garfiel',
	   'Luego de la maravilloza construccion del titanic este navega a aguas profundas, que sucedera?', 5)
ABORT

select * from peliculas as pe
	inner join detallepelicula as dep
on pe.id = dep.idpelicula where pe.id = 1
	   
	   