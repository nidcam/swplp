import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const RegistrationModalContext = createContext(null)

/**
 * The registration form lives in a single modal rather than in the page, so every
 * CTA on the page opens the same form instance.
 */
export function RegistrationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return (
    <RegistrationModalContext.Provider value={value}>
      {children}
    </RegistrationModalContext.Provider>
  )
}

export function useRegistrationModal() {
  const ctx = useContext(RegistrationModalContext)
  if (!ctx) {
    throw new Error('useRegistrationModal must be used inside RegistrationModalProvider')
  }
  return ctx
}
