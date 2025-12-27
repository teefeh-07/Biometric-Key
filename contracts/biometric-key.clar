;; Biometric Key Contract
;; A simple identity management system using biometric hashes

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-already-registered (err u101))
(define-constant err-not-found (err u102))

;; Data Maps
(define-map biometric-data principal (buff 32))
