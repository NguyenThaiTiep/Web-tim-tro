import React, { useState } from "react";

import { Route, Switch } from "react-router";
import { RoleAdmin } from "../../../libs/constants/role";
import { ApartmentProfile } from "../Apartment";
import { BodyWrapper } from "../BodyWrapper";
import Statistical from "../chart";

import { InfoProfile } from "../Info";
import { NavSidebar } from "../NavSideBar";
import { User } from "../User";
import "./style.scss";

import { Contract } from "../contract";
import Conversation from "../../../containers/chat/conversation";
import Messenger from "../../../containers/chat/messenger";

interface Props {
  children: any;
}

export const DashboardLayout = (props: Props) => {
  const [activeNav, setActiveNav] = useState(true);

  const onTogle = () => {
    setActiveNav(!activeNav);
  };
  return (
    <BodyWrapper>
      <div className="flex  bg-gray-200 dashboard">
        <NavSidebar navActive={activeNav} />

        <div className="flex flex-col flex-1 overflow-hidden main-content">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-2">
              <div
                className="content-box"
                style={{
                  flexGrow: 10,
                  flexBasis: "0%",
                  paddingLeft: "20px",
                  boxShadow: "0 2px 7px 0 rgba(0,0,0,.1)",
                }}
              >
                <Switch>
                  <Route exact path="/profile">
                    <Statistical />
                  </Route>
                  <Route exact path="/profile/post">
                    <ApartmentProfile onTogle={onTogle} />
                  </Route>
                  <Route exact path="/profile/info">
                    <InfoProfile onTogle={onTogle} />
                  </Route>
                  <Route exact path="/profile/user/admin">
                    <User onTogle={onTogle} type={RoleAdmin.ADMIN} />
                  </Route>
                  <Route exact path="/profile/user/renter">
                    <User onTogle={onTogle} type={RoleAdmin.RENTER} />
                  </Route>
                  <Route exact path="/profile/user/owner">
                    <User onTogle={onTogle} type={RoleAdmin.OWNER} />
                  </Route>
                  <Route exact path="/profile/support">
                    <Conversation />
                  </Route>
                  <Route exact path="/profile/support/messenger">
                    <Messenger />
                  </Route>
                  <Route path="/profile/support/messenger/:id">
                    <Messenger />
                  </Route>
                  <Route exact path="/profile/data/location">
                    <div>Dữ liệu</div>
                  </Route>
                  <Route exact path="/profile/contract">
                    <Contract onTogle={onTogle} />
                  </Route>
                </Switch>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
