import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  TextField,
  Typography,
  styled
} from '@mui/material'
import { useQuery } from 'react-query'
import { useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { RQueryKeys } from '../../../../types/react-query'
import GifService from '../../../../services/gif.service'

const DEBOUNCE_THRESHOLD = 500
export const GifView = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const query = useQuery([RQueryKeys.Gif, page], async () => {
    const res = await GifService.search(search, page)
    return res
  })

  const debounceRefetch = useMemo(() => debounce(query.refetch, DEBOUNCE_THRESHOLD), [])

  useEffect(() => {
    debounceRefetch()
  }, [search])

  const totalPages = query.data
    ? query.data.pagination.total_count / query.data?.pagination.count
    : 0

  const goPage = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100%'
    }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Typography variant='h1' fontSize={'2rem'}>ACME Gif search</Typography>
          <TextField
            placeholder='Search by name'
            label='Search gif'
            variant='filled'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 2
            }}
          >
            {
              query.isFetching
                ? <CircularProgress size='4rem' />
                : <>
                  {
                    query.data?.data.length === 0
                    && <Typography variant='h4'>No gif were found with the given prompt</Typography>
                  }
                  {
                    (query.data?.data || []).map((gif) => (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          cursor: 'pointer'
                        }}
                        onClick={() => goPage(gif.url)}
                      >
                        <Img
                          alt={gif.alt_text}
                          src={gif.images.preview_gif.url}
                          sx={{
                            width: '10rem',
                            height: '10rem'
                          }}
                        />
                      </Box>
                    ))
                  }
                </>
            }

          </Box>
          <Pagination
            count={totalPages || 0}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
    </Box>
  )
}

const Img = styled('img')``
