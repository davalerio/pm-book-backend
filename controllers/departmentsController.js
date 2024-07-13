import { DepartmentModel } from '../models/department.js'

// Listar registros
export const DepartmentController =
{
  findAll: async (req, res) => {
    try {
      const rows = await DepartmentModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
