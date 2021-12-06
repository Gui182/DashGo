import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface SideBarDrawerProviderProps {
    children: ReactNode
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderProps) {
    const disclousure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclousure.onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    return (
        <SideBarDrawerContext.Provider value={disclousure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext)