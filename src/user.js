import React from "react"
import InfoButton from "./usersdata"


const renderUser = (user,index) => {

    return (
      <tr key={index}>
        <td className="text-center ">{user.id}</td>
        <td className="text-center">{user.real_name}</td>
        <td className="text-center">{user.tz}</td>
        <td className="text-center"><InfoButton obj={{id:user.id, name:user.real_name, time:user.activity_periods}} /></td>
      </tr>
    )}
export default renderUser