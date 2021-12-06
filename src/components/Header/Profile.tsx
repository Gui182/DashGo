import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Guilherme Oliveira</Text>
                    <Text color="gray.300" fontSize="small">guilherme.augusto182@yahoo.com.br</Text>
                </Box>
            )}
            <Avatar size="md" name="Guilherme Augusto" src="https://github.com/GuiLaTT.png" />
        </Flex>
    )
}