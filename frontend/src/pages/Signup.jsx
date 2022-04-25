import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ImageUploading from "react-images-uploading"
import Swal from "sweetalert2/dist/sweetalert2.all.min.js"

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
  const [images, setImages] = React.useState([])
  const maxNumber = 1
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
    console.log(images)
    if (!images.length) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาอัปโหลดรูปโปรไฟล์",
      })
    } else {
      Swal.fire({
        title: "ยืนยันข้อมูลถูกต้องหรือไม่",
        text: "คุณต้องการสมัครสมาชิกหรือไม่",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#6E7881",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("สมัครสมาชิกสำเร็จ", "กรุณาตรวจสอบอีเมล์", "success")
        }
      })
    }
  }
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
          <div className="mb-3">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper mb-3">
                  <div
                    className="btn btn-light mb-3"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <i className="fa-solid fa-plus"></i> อัปโหลดรูปโปรไฟล์
                  </div>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item text-center">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="w-50 image-item__btn-wrapper mb-3"
                      />
                      <div className="image-item__btn-wrapper text-center">
                        <div
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => onImageUpdate(index)}
                        >
                          เปลี่ยน
                        </div>
                        <div
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => onImageRemove(index)}
                        >
                          ลบ
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
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
