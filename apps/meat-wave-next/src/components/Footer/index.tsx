import React from "react";
import Section from "../Section";
import { Typography } from "@monorepo-pnpm/shared/server";

function Footer() {
  return (
    <footer>
      <Section
        innerClassName="flex justify-between flex-col items-start xl:flex-row xl:items-center"
        outerClassName="py-3! border-t border-onSurface"
      >
        <div>Logo</div>
        <div className="flex flex-col">
          <div>
            <Typography variants="label" size="md">
              상호명:
            </Typography>
            <Typography variants="label" size="md">
              대표자명:
            </Typography>
            <Typography variants="label" size="md">
              사업자 등록번호
            </Typography>
            <Typography variants="label" size="md">
              대표전화
            </Typography>
          </div>
          <Typography variants="label" size="md">
            경기도 용인시 기흥구 기곡로 32(하갈동) (주사무소: 서울시 마포구
            월드컵북로 54길 25 S-city)
          </Typography>
          <Typography variants="label" size="md">
            COPYRIGHT© CJ FRESHWAY. ALL RIGHTS RESERVED.
          </Typography>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
