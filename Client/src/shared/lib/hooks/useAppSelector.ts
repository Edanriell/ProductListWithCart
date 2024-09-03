import { useSelector } from "react-redux";

import { RootState } from "@app/stores";

export const useAppSelector = useSelector.withTypes<RootState>();
