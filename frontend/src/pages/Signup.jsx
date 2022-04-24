import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    studenId: yup.string().min(5).max(5).required(),
    firstname: yup.string().max(30).required(),
    lastname: yup.string().max(30).required(),
    email: yup.string().max(100).email().required(),
    password: yup.string().min(8).max(30).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "รหัสผ่านไม่ตรงกัน"),
  })
  .required()

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <h2>สมัครสมาชิก</h2>
      <hr />
      <br />
      <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">รหัสนักเรียน</label>
            <input
              type="text"
              className="form-control"
              placeholder="รหัสนักเรียน 5 หลัก"
              {...register("studenId")}
            />
            <div className="mt-1 text-danger">
              {errors.studenId && "โปรดกรอกรหัสนักเรียนให้ถูกต้อง"}
            </div>
          </div>
          <div className="row mb-3 g-2">
            <div className="col">
              <label className="form-label">ชื่อ</label>
              <input
                type="text"
                className="form-control"
                placeholder="ชื่อ"
                {...register("firstname")}
              />

              <div className="mt-1 text-danger">
                {errors.firstname && "โปรดกรอกชื่อให้ถูกต้อง"}
              </div>
            </div>
            <div className="col">
              <label className="form-label">นามสกุล</label>
              <input
                type="text"
                className="form-control"
                placeholder="นามสกุล"
                {...register("lastname")}
              />

              <div className="mt-1 text-danger">
                {errors.lastname && "โปรดกรอกนามสกุลให้ถูกต้อง"}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">อีเมล</label>
            <input
              type="text"
              className="form-control"
              placeholder="อีเมล"
              {...register("email")}
            />
            <div className="mt-1 text-danger">
              {errors.email && "โปรดกรอกอีเมลให้ถูกต้อง"}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">รหัสผ่าน</label>
            <input
              type="password"
              className="form-control"
              placeholder="รหัสผ่าน 8 - 30 ตัวอักษร"
              {...register("password")}
            />
            <div className="mt-1 text-danger">
              {errors.password &&
                "โปรดกรอกรหัสผ่านให้ถูกต้อง (8 - 30 ตัวอักษร)"}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              className="form-control"
              placeholder="ยืนยันรหัสผ่าน 8 - 30 ตัวอักษร"
              {...register("confirmPassword")}
            />
            <div className="mt-1 text-danger">
              {errors.confirmPassword?.message}
            </div>
          </div>
          <div className="text-center mb-3">
            <button className="btn btn-success" type="submit">
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
