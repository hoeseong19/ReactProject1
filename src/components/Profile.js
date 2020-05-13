import React from "react";
import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

export default function Profile() {
  const profile = useSelector(state => state.selected.profile);
  if (!profile) {
    return (<div>Loading</div>);
  }

  return (
    <Table>
      <tbody>
        <tr>
          <td>Country</td>
          <td>{profile.country}</td>
        </tr>
        <tr>
          <td>Industry</td>
          <td>{profile.finnhubIndustry}</td>
        </tr>
        <tr>
          <td>Site</td>
          <td>
            <a href={profile.weburl}>{profile.weburl}</a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}