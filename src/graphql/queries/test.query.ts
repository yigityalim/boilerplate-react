import { gql, graphQLClient } from '@/lib/hygraph-client'
import { useQuery, UseQueryResult, useQueryClient } from 'react-query'
import { useEffect } from 'react'

const testQuery = gql`
    query TestQuery {
        test {
            id
            name
        }
    }
`

type TestQuery = {}

type TestQueryResponse = TestQuery & {}

export function getData(): UseQueryResult<TestQueryResponse[]> {
    const queryKey = ['BURAYA-ANAHTAR-DEĞER-GİRİLECEK.']
    const queryClient = useQueryClient()

    useEffect(() => {
        return () => {
            queryClient.removeQueries(queryKey)
        }
    }, [])

    return useQuery<TestQuery[]>(queryKey, async (): Promise<TestQuery[]> => {
        // burada destruct edilen değer query'den gelen değerdir. Dinamik olarak değişebilir.
        const { test } = await graphQLClient.request<never>(testQuery, {
            // burada ise query'de kullanılan değişkenlerin değerleri verilir.
        })
        return test
    })
}
