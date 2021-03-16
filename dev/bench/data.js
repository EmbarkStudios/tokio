window.BENCHMARK_DATA = {
  "lastUpdate": 1615895366694,
  "repoUrl": "https://github.com/EmbarkStudios/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455073102,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192404,
            "range": "± 14155",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 719305,
            "range": "± 55092",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5475166,
            "range": "± 590168",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20296480,
            "range": "± 2697044",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a9167bb7012f23640f5022bd97740d7829c4b1",
          "message": "runtime: avoid unnecessary polling of block_on future (#3582)",
          "timestamp": "2021-03-16T10:30:18+01:00",
          "tree_id": "02f2d79b68e3be88d573da55b949691d732423c0",
          "url": "https://github.com/EmbarkStudios/tokio/commit/e6a9167bb7012f23640f5022bd97740d7829c4b1"
        },
        "date": 1615895316346,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 196608,
            "range": "± 48543",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 689180,
            "range": "± 61095",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4962403,
            "range": "± 609229",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20836945,
            "range": "± 2551343",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455081949,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14652,
            "range": "± 5927",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 905,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 566,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14732,
            "range": "± 3517",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 980,
            "range": "± 168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a9167bb7012f23640f5022bd97740d7829c4b1",
          "message": "runtime: avoid unnecessary polling of block_on future (#3582)",
          "timestamp": "2021-03-16T10:30:18+01:00",
          "tree_id": "02f2d79b68e3be88d573da55b949691d732423c0",
          "url": "https://github.com/EmbarkStudios/tokio/commit/e6a9167bb7012f23640f5022bd97740d7829c4b1"
        },
        "date": 1615895300869,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14424,
            "range": "± 7703",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1052,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 622,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14230,
            "range": "± 3200",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1068,
            "range": "± 232",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455084406,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7017550,
            "range": "± 2383196",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6466339,
            "range": "± 1884997",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6339395,
            "range": "± 2231062",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 623,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 626,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 612,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 84678,
            "range": "± 5973",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1496,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1148964,
            "range": "± 64066",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 823580,
            "range": "± 44605",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a9167bb7012f23640f5022bd97740d7829c4b1",
          "message": "runtime: avoid unnecessary polling of block_on future (#3582)",
          "timestamp": "2021-03-16T10:30:18+01:00",
          "tree_id": "02f2d79b68e3be88d573da55b949691d732423c0",
          "url": "https://github.com/EmbarkStudios/tokio/commit/e6a9167bb7012f23640f5022bd97740d7829c4b1"
        },
        "date": 1615895365577,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6474110,
            "range": "± 2785400",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5796140,
            "range": "± 2107156",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5966521,
            "range": "± 1959779",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 819,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 815,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 814,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 132182,
            "range": "± 36682",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1582,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 932925,
            "range": "± 117710",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 619487,
            "range": "± 112013",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455083310,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 963,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17932,
            "range": "± 9008",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1037,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16755,
            "range": "± 8772",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 578,
            "range": "± 123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a9167bb7012f23640f5022bd97740d7829c4b1",
          "message": "runtime: avoid unnecessary polling of block_on future (#3582)",
          "timestamp": "2021-03-16T10:30:18+01:00",
          "tree_id": "02f2d79b68e3be88d573da55b949691d732423c0",
          "url": "https://github.com/EmbarkStudios/tokio/commit/e6a9167bb7012f23640f5022bd97740d7829c4b1"
        },
        "date": 1615895294154,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 819,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14119,
            "range": "± 4921",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 852,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14927,
            "range": "± 4948",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 449,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}