import xmltodict
import ujson;
import json;
import gzip

# with gzip.open("../Data/HEP-records.xml.gz","r") as fd:
#   data = ujson.loads(ujson.dumps(xmltodict.parse(fd.read())));



from pymarc import map_xml


# # with gzip.open("../Data/HEP-records.xml.gz","r") as fd:
# #   from pymarc import MARCReader
# entry = None;
# entries = [];
# with gzip.open("../Data/Jobs-records.xml.gz","r") as fd:
#   def print_title(r):
#     global entry,entries
#     print(r.title())
#     entry = r;
#     entries.append(entry);
#   map_xml(print_title, fd)

import pymarc
pymarc.MARCReader