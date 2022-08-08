import { GetChatUsers } from "../lib/plugins/plugin-manager"
import { useGetQuery } from "./use-get-generic"

export const useGetChatList = () => {
	return useGetQuery(GetChatUsers)
}
