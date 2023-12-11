import { Text, View } from "react-native"
import "../utils/firebase"
import { useEffect, useState } from "react"
import { User, getAuth, onAuthStateChanged } from "firebase/auth"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<null | User>(null)

  useEffect(() => {
    const auth = getAuth()
    return onAuthStateChanged(auth, (user) => {
      setIsLoading(false)
      setCurrentUser(user)
    })
  }, [])

  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 16,
      }}
    >
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <>
          {currentUser === null ? (
            <Text>No logged in user.</Text>
          ) : (
            <Text>Logged in user: {currentUser.displayName}</Text>
          )}
        </>
      )}
    </View>
  )
}
