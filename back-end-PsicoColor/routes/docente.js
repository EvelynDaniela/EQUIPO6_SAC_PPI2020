const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')

    
router.get("/docentes", (req, res) => {
    connection.query('SELECT * FROM docente',  (error, rows, fields) => {
        if(!error){
          res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get('/docente/:id', (req, res) => {
  try{
    const id = req.params.id
    connection.query(`SELECT * 
                      FROM docente
                      WHERE Identificación_del_docente = ?`, [id],  (error, rows, fields) => {
        if(error){
          res.json({error: "Error ejecutando la consulta"})
          
        }else{
          if(rows[0])
            res.json(rows[0])
          else
            res.json({})
        }
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get("/docentes/filtro", (req, res) => {
  try{
    const nombre = req.query.nombre
    const SQL = `SELECT a.*, td.descripcion tipo_doc
                FROM actores a
                INNER JOIN tipo_documento td ON a.tipo_documento = td.codigo
                WHERE a.nombres LIKE ? OR a.apellidos LIKE ?`
    connection.query(SQL,[`%${nombre}%`,`%${nombre}%`], (errors, results, fields) => {
      if(errors){
        res.status(500).json({mensje : "error en la consulta"})
      }else{
        res.status(200).json(results)
      }
    })
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }finally{
    
  }
})

router.post('/docente', async(req,res) => {
  try{
    const {
          Identificacion_del_docente,
          Nombre_del_docente,
          Apellidos_del_docente,
          Correo_electronico,
          Grupos_del_docente,
          Contrasena_del_docente

    } = req.body
    const SQL = `INSERT INTO docente(Identificación_del_docente, Nombre_del_docente, Apellidos_del_docente, Correo_electrónico, Grupos_del_docente, Contraseña_del_docente) VALUES(?, ?, ?, ?, ?, ?)` 
    const DATA = [Identificacion_del_docente, Nombre_del_docente, Apellidos_del_docente, Correo_electronico, Grupos_del_docente, Contrasena_del_docente]

    const response = await connection.query(SQL, DATA)

    const result = await connection.query(`SELECT * FROM docente WHERE  Identificación_del_docente = ?`, [Identificacion_del_docente])

    res.json(result[0])
  }catch(error){
    console.log(error)
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

router.put('/docente/:Identificacion_del_docente', (req, res) => {
  try{
    const Identificacion_del_docente = req.params.Identificacion_del_docente
    const {
          Nombre_del_docente,
          Apellidos_del_docente,
          Correo_electronico,
          Grupos_del_docente,
          Contrasena_del_docente
    } = req.body

    connection.query(`UPDATE docente
                      SET Nombre_del_docente = ?, Apellidos_del_docente = ?,  Correo_electrónico = ?, Grupos_del_docente = ?, Contraseña_del_docente = ?
                      WHERE Identificación_del_docente = ?`,[Nombre_del_docente, Apellidos_del_docente,Correo_electronico, Grupos_del_docente, Contrasena_del_docente, Identificacion_del_docente], (error, resulset, fields) => {
                        if(error){
                          console.log(error)
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({mensaje : 'El docente se actualizo exitosamente.'})
                        }
                      } 
                    )

 //   console.log(id)
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

router.delete('/docente/:Identificacion_del_docente', (req, res) => {
  try{
    const {Identificacion_del_docente} = req.params
    const SQL = `DELETE FROM docente WHERE Identificación_del_docente = ?`
    connection.query(SQL, [Identificacion_del_docente], (error, results, fields) => {
      if(error){
        res.status(502).json({mensaje : 'Error ejecutando la consulta'})
      }else{
        if(results.affectedRows > 0)
          res.json({mensaje : "Registro eliminado"})
        else
          res.json({mensaje : "El registro no existe"})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

  
module.exports = router