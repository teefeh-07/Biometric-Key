;; Biometric Key Contract
;; A simple identity management system using biometric hashes

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-already-registered (err u101))
(define-constant err-not-found (err u102))

;; Data Maps
(define-map biometric-data principal (buff 32))

;; Data Vars
(define-data-var user-count uint u0)

;; Public Functions
(define-public (register-biometric (hash (buff 32)))
    (let ((existing (map-get? biometric-data tx-sender)))
        (asserts! (is-none existing) err-already-registered)
        (var-set user-count (+ (var-get user-count) u1))
        (ok (map-set biometric-data tx-sender hash))
    )
)

(define-read-only (get-biometric (user principal))
    (map-get? biometric-data user)
)

(define-read-only (get-total-users)
    (ok (var-get user-count))
)
